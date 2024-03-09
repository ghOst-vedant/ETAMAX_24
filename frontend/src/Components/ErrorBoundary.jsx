function ErrorFallback({ error, resetErrorBoundary }) {
  return (
    <div role="alert" className="flex flex-col items-center gap-3">
      <p className="text-white text-xl">Something went wrong</p>
      <button
        className="text-white bg-red-500 p-3 rounded-lg"
        onClick={resetErrorBoundary}
      >
        Try Again
      </button>
    </div>
  );
}

export default ErrorFallback;
