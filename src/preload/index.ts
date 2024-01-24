import { contextBridge } from 'electron'

if (!process.contextIsolated) {
  throw new Error('Context isolation is disabled')
}

try {
  contextBridge.exposeInMainWorld('context', {})
} catch (error) {
  console.log(error)
}
