import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text } from 'react-native';

export default function Cep(props) {
  return (
	  <>
	  
	  <Text style={styles.texto}> Cep: {props.data.cep}</Text>
	  <Text style={styles.texto}> Logradouro: {props.data.logradouro}</Text>
	  <Text style={styles.texto}> Complemento: {props.data.complemento}</Text>
	  <Text style={styles.texto}> Bairro: {props.data.bairro}</Text>
	  <Text style={styles.texto}> Localidade: {props.data.localidade}</Text>
	  <Text style={styles.texto}> UF: {props.data.uf}</Text>
	  <Text style={styles.texto}> DDD: {props.data.ddd}</Text>
	  </>
	  
  );
}

const styles = StyleSheet.create({
	texto:{
		color:'#fff',
		fontSize:20,
	  	textAlign:'center',
		marginTop:10
	}
});
