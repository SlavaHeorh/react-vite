const ErrorMessage = ({error}) => {
    return (
        <p className='error-global'>{error && 'Field is required'}</p>
    )
}

export default ErrorMessage