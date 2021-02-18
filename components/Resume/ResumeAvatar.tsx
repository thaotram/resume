import cn from 'classnames';

export default function ResumeAvatar(props: { className?: string }) {
    return (
        <img
            className={cn('px-12 lg:pr-0', props.className)}
            src="/avatar.jpg"
        />
    );
}
