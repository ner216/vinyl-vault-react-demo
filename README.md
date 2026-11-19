# vinyl-vault-react-demo

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

## React Component Hierarchy

**Component Hierarchy**

- <App /> (Owner: cart[Array], isCartOpen[Boolean])
    - <Navbar> (Sticky: Logo, Category Link, Cart button with item count)
    - <Routes> 
        - <Route path="/" element="{<CatalogPage /> (Owner: albums[Array], onAddToCart[func])}" />
            - <AlbumCard> (Owner: album[map], onAddToCart[func])
        - <Route path="/albums/:albumId" element="{<AlbumDetailPage /> (Owner: albums[array], onAddToCart[func])}" />
        - <Route path="/checkout" element="{<CheckoutPage /> (Owner: cart[array], onClearCart[func])}" />
            - <AlertModal> (Owner: isOpen[Boolean], onClose[func], message[String])
    - <CartDrawer /> (Owner: isOpen[boolean], cart[array], onClose[func], onUpdateQuantity[func], onRemove[func])

**Component Locations**

- `<Navbar /> -> /components/Navbar.jsx`
- `<AlbumCard> -> /components/AlbumCard.jsx`
- `<CardDrawer> -> /components/CardDrawer.jsx`
- `<AlertModal> -> /components/AlertModal.jsx`
- `<AlbumDetailPage> -> /pages/AlbumDetail.jsx` (Routed page)
- `<CatalogPage.jsx> -> /pages/CatalogPage.jsx`   (Routed page)
- `<CheckoutPage.jsx> -> /pages/CheckoutPage.jsx` (Routed page)

## Credits

Icons provided by [Flaticon](https://www.flaticon.com/):
- Record Icon at `public/favicon.png`
