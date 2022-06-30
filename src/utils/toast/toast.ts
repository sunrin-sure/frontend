import { Id, toast } from 'react-toastify'

export const LoadingToast = (render: string) => {
    const id = toast.loading(render)
    return id
}

export const updateToastSuccess = (loadingId: Id, render: string) => {
    toast.update(loadingId, { render: render, type: "success", isLoading: false, autoClose: 2000, closeButton: true })
}

export const updateToastFail = (loadingId: Id, render: string) => {
    toast.update(loadingId, {render: render, type: "error", isLoading: false, autoClose: 2000, closeButton: true })
}