import Link from 'next/link';

export function Logo() {
  return (
    <Link href="/" className="flex items-center gap-3" prefetch={false}>
      <img src="https://storage.googleapis.com/cloud-next-bandung/images/gdg-logo.png" alt="Google Developer Groups Logo" className="w-14 h-14" />
      <div className="flex flex-col">
        <span className="text-base font-semibold tracking-tight text-foreground">Google Developer Groups</span>
        <span className="text-sm text-muted-foreground">Cloud &middot; Bandung</span>
      </div>
    </Link>
  );
}
