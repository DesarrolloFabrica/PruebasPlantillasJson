export function AppHeader() {
  return (
    <header className="flex items-center justify-between border-b border-emerald-900/20 bg-linear-to-r from-emerald-900 via-emerald-800 to-emerald-900 px-6 py-3 text-emerald-50">
      <div className="flex items-center gap-3">
        <div className="flex h-9 w-9 items-center justify-center rounded-2xl bg-emerald-500 text-lg">
          ⚡
        </div>
        <div>
          <h1 className="text-base font-semibold leading-tight">
            Generador de Cursos Web
          </h1>
          <p className="text-xs text-emerald-100/80">
            MVP – Versión de pruebas
          </p>
        </div>
      </div>

      <button className="flex h-9 w-9 items-center justify-center rounded-full bg-emerald-800/80 text-xs font-medium shadow-inner ring-1 ring-emerald-500/60">
        A
      </button>
    </header>
  );
}

export default AppHeader;
