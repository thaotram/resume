export default function ResumeAvatar({ className }: { className?: string }) {
  return <img className={cn('px-12 lg:pr-0', className)} src="/avatar.jpg" />;
}
