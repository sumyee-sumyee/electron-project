const state = {
  MonitorMode: 'outdoor',
  MonitorLocale: 'zh',
  filename: null,
  infilename: null,
  fileListItems: 16,
  fileList: [],
  comOptions: [],
  comValue: 'COM1',
  systemCheck: null, 
  driveCheck: null,
  csvFilePath: null,
  OutcsvFilePath: null,
 
  isCh:true
}

const mutations = {
  CLEAN_FILELIST (state) {
    state.fileList = []
    state.filename = null
    state.infilename = null
    state.csvFilePath = null
    state.systemCheck = null
    state.driveCheck  = null
    state.OutcsvFilePath = null
	state.MonitorMode = 'outdoor'
  },
  SET_FILENAME (state, filename) {
    state.filename = filename
    let index = state.fileList.indexOf(filename)
    if (index === -1) {
      state.fileList.unshift(filename)
      while (state.fileList.length > state.fileListItems) {
        state.fileList.pop()
      }
    } else {
      state.fileList.splice(index, 1)
      state.fileList.unshift(filename)
    }
  },
  SET_INFILENAME (state, infilename) {
    state.infilename = infilename
    let index = state.fileList.indexOf(infilename)
    if (index === -1) {
      state.fileList.unshift(infilename)
      while (state.fileList.length > state.fileListItems) {
        state.fileList.pop()
      }
    } else {
      state.fileList.splice(index, 1)
      state.fileList.unshift(infilename)
    }
  },
  SET_COMPORT (state, port) {
    state.comValue = port
  },
  ADD_FILENAME_INTOLIST (state, filename) {
    state.filename = filename
    let index = state.fileList.indexOf(filename)
    if (index === -1) {
      state.fileList.unshift(filename)
      while (state.fileList.length > state.fileListItems) {
        state.fileList.pop()
      }
    } else {
      state.fileList.splice(index, 1)
      state.fileList.unshift(filename)
    }
  },
  SET_COMLIST (state, list) {
    state.comOptions = null
    state.comOptions = [...list]
    let hit = 0
    state.comOptions.forEach(element => {
      if (element.value === state.comValue) {
        hit = 1
      }
    })
    if (hit === 0) {
      if (list.length > 0) {
        state.comValue = state.comOptions[0].value
      } else {
        state.comValue = null
      }
    }
  },
  SET_MODE (state, mode) {
    state.MonitorMode = mode
  },
  SET_LOCALE (state, locale) {
    state.MonitorLocale = locale
  },
  SET_SYSTEMCHECK (state, systemCheck) {
    state.systemCheck = systemCheck
  },
  SET_DRIVECHECK (state, driveCheck) {
    state.driveCheck = driveCheck
  },
  SET_CSVPATH (state, csvFilePath) {
    state.csvFilePath = csvFilePath
  },
  SET_OUTCSVPATH (state, csvFilePath) {
    state.OutcsvFilePath = csvFilePath
  },


  CHANGELANG(state){
    state.isCh=!state.isCh
  }
}

const actions = {
  SetFilename ({ commit }, filename) {
    commit('SET_FILENAME', filename)
  },
  SetInFilename ({ commit }, filename) {
    commit('SET_INFILENAME', filename)
  },
  SetComPort ({ commit }, port) {
    commit('SET_COMPORT', port)
  },
  AddFile ({ commit }, filename) {
    commit('ADD_FILENAME_INTOLIST', filename)
  },
  SetComList ({ commit }, list) {
    commit('SET_COMLIST', list)
  },
  SetMode ({ commit }, mode) {
    commit('SET_MODE', mode)
  },
  SetLocale ({ commit }, locale) {
    commit('SET_LOCALE', locale)
  },
  CleanFilelist ({ commit }) {
    commit('CLEAN_FILELIST')
  },
  SetSystemCheck ({ commit }, systemCheck) {
    commit('SET_SYSTEMCHECK', systemCheck)
  },
  SetDriveCheck ({ commit }, driveCheck) {
    commit('SET_DRIVECHECK', driveCheck)
  },
  SetCsvFilePath ({ commit }, csvFilePath) {
    commit('SET_CSVPATH', csvFilePath)
  },
  SetOutCsvFilePath ({ commit }, csvFilePath) {
    commit('SET_OUTCSVPATH', csvFilePath)
  },
  ChangeLanFun(context){
    context.commit("CHANGELANG")
  }
}

export default {
  state,
  mutations,
  actions
}
