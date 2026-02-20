
# 🚀 InspireLabs Website

Official website for **InspireLabs**, built using:

- Hugo (Extended)
- TailwindCSS
- GitHub Actions
- GitHub Pages

Live Site:
👉 https://inspirelabs.org

---

# 🖥 Local Setup Guide

Follow these steps to run the website on your local computer.

---

## 1️⃣ Install Required Software

### ✅ Windows (Using winget)

Open a Command Window as Administrator, run the following commands and follow the prompts:

winget install --id Git.Git -e <br>
winget install --id OpenJS.NodeJS.LTS -e <br>
winget install --id Hugo.Hugo.Extended -e <br>

Close and reopen Command Window as Administrator:

Verify installation:

git --version <br>
node -v <br>
npm -v <br>
hugo version <br>

⚠ Hugo version MUST say **extended**.

---

### ✅ macOS (Using Homebrew)

brew install git <br>
brew install node <br>
brew install hugo <br>

Verify:

git --version <br>
node -v <br>
npm -v <br>
hugo version <br>

---

## 2️⃣ Clone the Repository

cd \temp <br>

git clone https://github.com/SathvikDasari/inspirelabs-site.git <br>

cd inspirelabs-site

---

## 3️⃣ Install Project Dependencies

npm install

---

## 4️⃣ Run Website Locally

hugo server

Open below URL in browser to launch the site locally:

http://localhost:1313

The site will automatically refresh when you save changes.

---

# 🔁 Development Workflow (IMPORTANT)

⚠ Do NOT push directly to `main`.

---

## Step 1 – Create a Branch

git checkout -b <branch name> <br>

Example: git checkout -b update-homepage-text

---

## Step 2 – Make Your Changes

Edit content, layouts, images, etc.

---

## Step 3 – Commit Changes

git add . <br>

git commit -m <commit message> <br>

Example: git commit -m "Home page has been updated"

---

## Step 4 – Push Branch

git push -u origin <branch name> <br>

Example: git push -u origin update-homepage-text

---

## Step 5 – Open Pull Request

1. Go to GitHub
2. Open Pull Request
3. Merge into `main`

After merge:
✅ GitHub automatically builds  
✅ GitHub Pages automatically deploys  
✅ Live site updates  

No manual deployment needed.

---

# 🚀 Deployment

Deployment is fully automated using GitHub Actions.

When code is merged into `main`:

1. Hugo builds the site
2. Static files are generated
3. GitHub Pages deploys the site
4. Live at https://inspirelabs.org

---

# 🔒 Branch Protection

The `main` branch is protected:

- Pull Request required
- Direct pushes blocked
- GitHub Actions must pass

---

# 👥 Contributor Guidelines

- Always create a new branch
- Use clear commit messages
- Keep changes focused (one feature per PR)
- Test locally before pushing
- Do NOT edit generated files

---

# 📁 Project Structure

content/    → Website pages  
layouts/    → Page templates  
static/     → Images and static assets  
assets/     → Tailwind and CSS  
themes/     → TailBliss theme  

---

# 🆘 Common Issues

### Hugo error: "POSTCSS not found"

Run:
npm install

---

### Hugo version must say "extended"

If not (Windows):
winget install Hugo.Hugo.Extended --force

---

# 🎯 Maintainer

Created and maintained by  
**Sathvik Dasari**

---

# 🌟 InspireLabs

Empowering the next generation of innovators.