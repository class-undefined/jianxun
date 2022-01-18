/* 图标 */
export interface IconActionProps {
    icon: React.FC,
    content: string,
    action: () => void
}
export const Icon: React.FC<IconActionProps> = () => {
    return (
        <div></div>
    )
}