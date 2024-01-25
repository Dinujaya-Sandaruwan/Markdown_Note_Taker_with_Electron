import { ActionButtonsRow, Content, DraggalbeTopBar, RootLayout, Sidebar } from '@/components'

const App = () => {
  return (
    <>
      <DraggalbeTopBar />
      <RootLayout>
        <Sidebar className="p-2 ">
          <ActionButtonsRow className="flex justify-between mt-1" />
        </Sidebar>
        <Content className="border-l bg-zinc-900/50 border-l-white/20 ">Content</Content>
      </RootLayout>
    </>
  )
}

export default App
