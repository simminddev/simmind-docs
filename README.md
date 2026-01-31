# Simmind Docs

This website is built using [Docusaurus](https://docusaurus.io/), a modern static website generator.

## Installation

```bash
npm install
```

## Local Development

```bash
npm start
```

This command starts a local development server and opens up a browser window. Most changes are reflected live without having to restart the server.

## Making Changes to Documentation

### Adding/Editing Markdown Files

1. **Add new docs**: Create `.md` files in the `docs/` directory
2. **Edit existing docs**: Modify any `.md` file in the `docs/` directory
3. **Preview changes**: Run `npm start` to see changes in real-time

### Markdown File Structure

Each markdown file should have frontmatter at the top:

```markdown
---
sidebar_position: 1
---

# Your Page Title

Your content here...
```

## SSH Key Configuration (One-time Setup)

To deploy to GitHub Pages, you need to set up SSH authentication for this repository only:

### 1. Generate SSH Key

```bash
ssh-keygen -t ed25519 -C "your-email@example.com" -f ~/.ssh/id_ed25519_simmind
```

### 2. Add Key to SSH Agent

```bash
eval "$(ssh-agent -s)"
ssh-add ~/.ssh/id_ed25519_simmind
```

### 3. Add Public Key to GitHub

```bash
cat ~/.ssh/id_ed25519_simmind.pub
```

Copy the output and add it to GitHub:
- Go to GitHub Settings > SSH and GPG keys > New SSH key
- Paste the public key and save

### 4. Configure SSH for This Repository

Add to `~/.ssh/config`:

```
Host github.com-simmind
  HostName github.com
  User git
  IdentityFile ~/.ssh/id_ed25519_simmind
```

### 5. Set Git Remote URL

```bash
git remote set-url origin git@github.com-simmind:simminddev/simmind-docs.git
```

### 6. Configure Git User (Local to This Repo)

```bash
git config user.name "Your Name"
git config user.email "your-email@example.com"
```

### 7. Test SSH Connection

```bash
ssh -T git@github.com-simmind
```

You should see: `Hi simminddev! You've successfully authenticated...`

## Deployment to GitHub Pages

### Deploy Updates

After making changes to your docs:

```bash
USE_SSH=true npm run deploy
```

This will:
1. Build the static site
2. Push to the `gh-pages` branch
3. Your site will be live at: https://simminddev.github.io/simmind-docs/

### Deploy Workflow

```bash
# Make your changes to markdown files
# ...

# Test locally
npm start

# Build and deploy
USE_SSH=true npm run deploy
```

## Build for Production

```bash
npm run build
```

This generates static content into the `build` directory.

## Serve Built Site Locally

```bash
npm run serve
```

This serves the production build locally for testing before deployment.


### Appendix
### First-Time Deployment Setup

1. **Initialize gh-pages branch** (only needed once):

```bash
git checkout --orphan gh-pages
echo "# Docs" > README.md
git add README.md
git commit -m "Initialize gh-pages"
git push origin gh-pages
git checkout main
```

2. **Enable GitHub Pages**:
   - Go to repository Settings > Pages
   - Set Source to `gh-pages` branch
   - Click Save