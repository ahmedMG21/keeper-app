import com.atlassian.jira.component.ComponentAccessor
import com.atlassian.jira.issue.Issue

def currentUser = ComponentAccessor.jiraAuthenticationContext.loggedInUser
def issue = underlyingIssue as Issue

if (!issue) {
    return
}

// Replace "MYPROJECT" with your actual project key
def targetProjectKey = "MYPROJECT"

if (issue.projectObject.key != targetProjectKey) {
    return
}

def status = issue.getStatus()?.getName()
def projectRoleManager = ComponentAccessor.getComponent(com.atlassian.jira.security.roles.ProjectRoleManager)

def pmRole = projectRoleManager.getProjectRole("Project Manager")
def testManagerRole = projectRoleManager.getProjectRole("Test Manager")

def isPM = projectRoleManager.isUserInProjectRole(currentUser, pmRole, issue.projectObject)
def isTestManager = projectRoleManager.isUserInProjectRole(currentUser, testManagerRole, issue.projectObject)

if (status == "To Do") {
    if (!(isPM || isTestManager)) {
        getField("").setReadOnly(true) // Make all fields read-only for users not in allowed roles
    }
} else if (status == "Design Doing") {
    getField("").setReadOnly(true) // Make all fields read-only for everyone
}