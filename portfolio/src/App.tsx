import PersonalStatement from './components/PersonalStatement'

function App() {
  return (
    <div className="min-h-screen bg-gray-100">
      <header className="bg-white shadow">
        <div className="max-w-6xl mx-auto py-4 px-4 sm:px-6 lg:px-8">
          <h1 className="text-3xl font-bold text-gray-900">Muhammad Sarmad Jafri</h1>
        </div>
      </header>
      <main className="py-6">
        <PersonalStatement />
      </main>
    </div>
  )
}

export default App