import colors from "../component/colors/color";
exports.styles = {
    container:{flex: 1},
    main:{marginTop: 20, backgroundColor: 'white'},
    title: {
      fontSize: 18,
      marginLeft: 20,
      fontWeight: 'bold',
      marginTop: 12,
    },
    Image: {height: 400, width:"100%"},
    IconView: {
      padding: 10,
      flexDirection: 'row',
      justifyContent: 'space-around',
    },
    touchableOpacity: {padding: 2, paddingLeft: 16, paddingRight: 16},
    sub: {flexDirection: 'row', marginLeft: 20, marginTop: 6},
    subTxt: {color: colors.red, marginRight: 10},
    domain: {marginRight: 10, color: colors.txt},
    create:{color: colors.txt},
    score: {marginLeft: 20, flexDirection: 'row', margin: 10},
    scoreTxt: {fontSize: 18, fontWeight: 'bold', marginRight: 10},
    comment: {alignSelf: 'flex-end', color: colors.txt},
    float: {
      flex: 1,
      alignItems: 'center',
      justifyContent: 'center',
      width: 60,
      position: 'absolute',
      bottom: 30,
      right: 28,
      height: 60,
      backgroundColor: 'red',
      borderRadius: 100,
      elevation: 5,
    },
  };