export default function BlueThemeWrapper({ children }) {
  return (
    <div className="min-h-screen bg-gradient-to-b from-blue-50 via-sky-50 to-amber-50 text-gray-900">
      {/* === [EDITABLE] Top gradient accent (gray -> gold) === */}
      <div className="h-1 bg-gradient-to-r from-gray-300 via-gray-400 to-amber-300" />
      {children}
      {/* === [EDITABLE] Bottom gradient accent (blue shades) === */}
      <div className="h-1 bg-gradient-to-r from-blue-700 via-sky-500 to-blue-400" />
    </div>
  );
}
