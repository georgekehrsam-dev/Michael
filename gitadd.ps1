Write-Output "Staging all changes..."
git add -A

Write-Output "Committing..."
git commit -m "Autocommit"

Write-Output "Pushing to master..."
git push origin master

Write-Output "Done! Now run: .\deploy.ps1"