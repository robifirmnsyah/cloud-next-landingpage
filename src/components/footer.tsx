export default function Footer() {
  return (
    <footer className="w-full">
      <div className="container mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 py-6">
        <div className="text-center text-sm text-muted-foreground">
          <p>&copy; {new Date().getFullYear()} Cloud Next Extended Bandung. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
}
