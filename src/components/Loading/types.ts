
export interface LoadingProps {
    message?: string
    close: ()=>void
}

export type CreateMessageProps = Omit<LoadingProps, 'close'>