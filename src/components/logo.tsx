export function Logo() {
  return (
    <a href="#" className="flex items-center gap-3" prefetch={false}>
      <svg width="45" height="26" viewBox="0 0 45 26" fill="none" xmlns="http://www.w3.org/2000/svg" className="h-7 w-auto">
        <path d="M14.1625 10.3429L10.9312 13.1143L14.1625 15.8857L17.3937 13.1143L14.1625 10.3429Z" fill="#EA4335"/>
        <path d="M10.9312 18.5143L7.7 15.7429L4.46875 18.5143L7.7 21.2857L10.9312 18.5143Z" fill="#34A853"/>
        <path d="M20.625 18.5143L17.3937 15.7429L14.1625 18.5143L17.3937 21.2857L20.625 18.5143Z" fill="#4285F4"/>
        <path d="M25.0312 5.02857L20.3375 9.02857L14.1625 4.34286V1.31429L19.4562 5.37143L21.7937 3.37143L18.5625 0.542857H25.0312V5.02857Z" fill="#4285F4"/>
        <path d="M3.2375 22.8286L0 25.6H9.10625L11.8125 22.8286L9.10625 20.0571L3.2375 22.8286Z" fill="#34A853"/>
        <path d="M41.7625 22.8286L45 25.6H35.8938L33.1875 22.8286L35.8938 20.0571L41.7625 22.8286Z" fill="#FBBC04"/>
        <path d="M41.7625 3.17143L35.8938 5.94286L33.1875 3.17143L35.8938 0.400001H45V25.6H41.7625V3.17143Z" fill="#FBBC04"/>
        <path d="M28.4688 12.0571L25.333 14.7753L29.3562 18.5143L32.4921 15.7961L28.4688 12.0571Z" fill="#EA4335"/>
        <path d="M25.0312 5.02857L21.8 7.31429L25.0312 9.6H28.2625L25.0312 7.31429V5.02857Z" fill="#4285F4"/>
        <path d="M10.9312 7.31429L14.1625 9.6H17.3937L14.1625 7.31429L10.9312 5.02857V7.31429Z" fill="#EA4335"/>
      </svg>
      <div className="flex flex-col">
        <span className="text-base font-semibold tracking-tight text-foreground">Google Developer Groups</span>
        <span className="text-sm text-muted-foreground">Cloud &middot; Bandung</span>
      </div>
    </a>
  );
}
