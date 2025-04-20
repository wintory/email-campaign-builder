const FullscreenLoader = () => {
  return (
    <div className="fixed top-0 left-0 flex h-screen w-screen cursor-not-allowed items-center justify-center">
      <div className="fixed z-100 h-screen w-screen cursor-not-allowed bg-slate-400 opacity-30" />
      <span
        data-testid="fullscreen-loader"
        className="loading loading-ring loading-lg bg-primary"
      />
    </div>
  )
}

export default FullscreenLoader
