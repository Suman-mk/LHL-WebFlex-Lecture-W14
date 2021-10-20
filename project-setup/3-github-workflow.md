# GitHub Workflow

### **branch:** `main`
1. `git pull` to get all the files from `main` remote branch.

2. `git checkout -b <branchName>` to create new branch.
* example: `git checkout -b feature-routes-users`
* creating new branch will automatically switch to that branch name.

### **branch:** `feature-routes-users`
1. Code and do your work...

2. `git add .` to commit all files you work on. 
* `git add <fileName>` to commit specific file.

3. `git commit -m add endpoint for all users` to commit changes.

4. `git push origin feature-routes-users` to push to `feature-routes-users` repository.

5. `git checkout main` to go back to `main` branch.

### **branch:** `main`
1. `git pull` to get all the files from `main` remote branch.

2. fix conflicts, if any.

3. `git merge feature-routes-users` to merge `feature-routes-users` to `main` repository.

4. `git push` to upload all the work done to `main` repository.

---

### Tips:
* NEVER CODE ON MAIN / MASTER BRANCH
* `git pull` to get all the latest updates before you start working on project.
* Don't make one big commit. Make frequent commits at each steps.
* Communicate with team if there is a merge conflict.

---

### Links:
* https://guides.github.com
* https://gist.github.com/donburks/a5c1aae6de7d1504e631
