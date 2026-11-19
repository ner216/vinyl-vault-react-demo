# vynil-vault-react-demo

## Development Setup

### 1. Install Node/npm

RHEL/Fedora:
```bash
sudo dnf install nodejs
```

Ubuntu:
```bash
sudo snap install node --classic
```

### 2. Clone repository and change current directory to project root

```bash
git clone https://github.com/ner216/vynil-vault-react-demo.git && cd vynil-vault-react-demo
```

### 4. Install dependancies

```bash
npm install
```

### 3. Run development server

```bash
npm run dev
```

## Project Structure

- `/public` Assets that are read by browser without being processed first by the framework.
- `/src`    Main code for the project.
- `/src/assets` Assets that are bundled with code and processed by framework.
- `/src/components` React component implementations.
- `/src/data`   Mock data for project demo.
- `/src/pages`  React component implementations for app webpages.

## Credits

Icons provided by [Flaticon](https://www.flaticon.com/):
- Record Icon at `public/favicon.png`