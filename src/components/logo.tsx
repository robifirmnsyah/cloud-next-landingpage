import Image from 'next/image';
import Link from 'next/link';

export function Logo() {
  return (
    <Link href="/" className="flex items-center gap-3" prefetch={false}>
      <Image src="/image/gdg-logo.png" alt="GDG Cloud Bandung Logo" width={45} height={26} className="h-7 w-auto" />
      <div className="flex flex-col">
        <span className="text-base font-semibold tracking-tight text-foreground">Google Developer Groups</span>
        <span className="text-sm text-muted-foreground">Cloud &middot; Bandung</span>
      </div>
    </Link>
  );
}
