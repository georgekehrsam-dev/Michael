# deploy.ps1

# Set variables
$projectFolder = "ASCEND-WEBDEV-WORKSHOP-MAIN"
$repoURL = "https://github.com/georgekehrsam-dev/Michael.git"

Set-Location $projectFolder

Write-Host "Installing npm dependencies..."
npm install

if (-not (Get-ChildItem node_modules -Recurse | Where-Object { $_.Name -eq "gh-pages" })) {
    Write-Host "Installing gh-pages..."
    npm install --save-dev gh-pages
} else {
    Write-Host "gh-pages already installed."
}

if (-not (Test-Path ".git")) {
    Write-Host "Initializing git repository..."
    git init
}

$existingRemote = git remote
if (-not ($existingRemote -contains "origin")) {
    Write-Host "Adding remote origin..."
    git remote add origin $repoURL
} else {
    Write-Host "Remote origin already set."
}

Write-Host "Building project..."
npm run build

Write-Host "Deploying to GitHub Pages..."
npm run deploy

Write-Host "Deployment complete!"
