
export interface LoadingProps {
    message?: string,
    fullscreen?: boolean,
    lock?: boolean,
    transitionName?: string,
    close: ()=>void
}

export type CreateLoadingProps = Omit<LoadingProps, 'close'>