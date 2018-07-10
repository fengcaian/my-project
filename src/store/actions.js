export default {
  getConst ({state, commit}) {
    console.log(state.count)
    const data = {
      name: 'dataName',
      result: [1, 2]
    }
    commit('setConst', {
      name: data.name,
      result: data.result
    })
  }
}
