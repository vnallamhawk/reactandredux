const OpenFileMock = jest.mock('react-native-doc-viewer', () => {
    return {
      openFile: jest.fn(() => {})
    }
  })
  
  global.OpenFile = OpenFileMock