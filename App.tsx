import React, { useState } from 'react';

import {
  View,
  Text,
  TextInput,
  TouchableOpacity,
  Alert,
  Image,
  ScrollView,
} from 'react-native';
import { Picker } from '@react-native-picker/picker';
import { NavigationContainer } from '@react-navigation/native';
import {
  createNativeStackNavigator,
  NativeStackScreenProps,
} from '@react-navigation/native-stack';
import { createDrawerNavigator } from '@react-navigation/drawer';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { styles } from './assets/styleSheet';

type FonoStackParamList = {
  SelecaoIdade: undefined;

  Dores: { idade: string };
};

const FonoStack = createNativeStackNavigator<FonoStackParamList>();

type MainTabParamList = {
  FonoPrincipal: undefined;

  PerfilUsuario: undefined;
};

const Tab = createBottomTabNavigator<MainTabParamList>();

type RootDrawerParamList = {
  FonoApp: undefined;

  SobreProjeto: undefined;
};

const Drawer = createDrawerNavigator<RootDrawerParamList>();

function PerfilUsuarioScreen() {
  const [userName, setUserName] = useState('Isabela Barcellos');

  const [rm, setRm] = useState('RM 553746');

  const [dataNascimento, setDataNascimento] = useState('21/04/2004');

  const plano = 'Care Plus Total';

  const idade = 21;

  return (
    <View style={styles.containerHome}>
      <Text style={styles.title}>Meu Perfil</Text>

      <Image
        source={require('./assets/avatar.jpg')}
        style={styles.avatar}
        resizeMode="cover"
      />

      <TextInput
        style={styles.inputProfile}
        value={userName}
        onChangeText={setUserName}
        placeholder="Seu Nome Completo"
      />

      <TextInput
        style={styles.inputProfile}
        value={rm}
        onChangeText={setRm}
        placeholder="RM"
        keyboardType="numeric"
      />

      <TextInput
        style={styles.inputProfile}
        value={dataNascimento}
        onChangeText={setDataNascimento}
        placeholder="DD/MM/AAAA"
        keyboardType="numeric"
      />

      <View style={{ ...styles.perfilInfo, marginTop: 20 }}>
        <Text style={styles.perfilLabel}>Plano:</Text>

        <Text style={styles.perfilValue}>{plano}</Text>
      </View>

      <View style={styles.perfilInfo}>
        <Text style={styles.perfilLabel}>Idade:</Text>

        <Text style={styles.perfilValue}>{idade} anos</Text>
      </View>
    </View>
  );
}

type SelecaoProps = NativeStackScreenProps<FonoStackParamList, 'SelecaoIdade'>;

function SelecaoIdadeScreen({ navigation }: SelecaoProps) {
  const [faixaEtaria, setFaixaEtaria] = useState<string | null>(null);

  const NavegarParaDores = () => {
    if (!faixaEtaria) {
      Alert.alert('Atenção', 'Selecione uma faixa etária.');

      return;
    }

    navigation.navigate('Dores', { idade: faixaEtaria });
  };

  return (
    <ScrollView
      style={{ flex: 1 }}
      contentContainerStyle={styles.containerHome}>
      <Image
        source={require('./assets/LogoFono.jpg')}
        style={styles.logoFono}
        resizeMode="cover"
      />
      <Text style={styles.title}>
        {' '}
        Selecione em qual desses você está interssado:
      </Text>
      <View style={styles.pickerContainer}>
        <Picker
          selectedValue={faixaEtaria}
          style={styles.picker}
          onValueChange={(itemValue) => setFaixaEtaria(itemValue as string)}>
          <Picker.Item label=" Selecione a Faixa Etária " value={null} />
          <Picker.Item label="Infantil (3 a 11 anos)" value="infantil" />
          <Picker.Item label="Adolescente (12 a 17 anos)" value="adolescente" />
          <Picker.Item label="Adulto (18 a 59 anos)" value="adulto" />
          <Picker.Item label="Idoso (60+)" value="idoso" />
        </Picker>
      </View>
      <TouchableOpacity
        style={styles.buttonSum}
        onPress={NavegarParaDores}
        activeOpacity={0.8}>
        <Text style={styles.buttonText}>Acessar o Tratamento</Text>
      </TouchableOpacity>
    </ScrollView>
  );
}

type DoresProps = NativeStackScreenProps<FonoStackParamList, 'Dores'>;

function DoresScreen({ route, navigation }: DoresProps) {
  const { idade } = route.params;

  const explicacao = (faixa: string) => {
    switch (faixa) {
      case 'infantil':
        return 'As principais dores envolvem o atraso na fala, as trocas ou omissões de sons, a dificuldade para formar frases completas e a fala pouco compreensível. Também são comuns alterações como respiração oral, baixa força nos músculos da boca e língua, além de dificuldades para mastigar ou engolir. Muitas crianças ainda apresentam baixa atenção auditiva ou timidez ao se comunicar. ';

      case 'adolescente':
        return 'As queixas mais frequentes estão relacionadas às mudanças vocais da puberdade, à fala rápida ou “embolada”, à insegurança e timidez ao se expressar, e ao cansaço ou esforço vocal em atividades escolares. Também é comum observar postura e respiração inadequadas durante a fala.';

      case 'adulto':
        return 'Predominam dores ligadas ao uso intenso da voz, como rouquidão, fadiga vocal e tensão muscular. Muitos relatam dificuldade de articulação, falta de projeção vocal e respiração ineficiente, o que compromete a clareza e a expressividade. Também surgem queixas relacionadas à insegurança em apresentações e à reabilitação da fala após cirurgias ou alterações específicas.';

      case 'idoso':
        return 'As principais dificuldades envolvem voz fraca, trêmula ou rouca, fala lenta e pouco articulada, e problemas de deglutição, como engasgos e tosse ao se alimentar. É comum ainda o esquecimento de palavras, a lentidão na comunicação e o isolamento social devido à perda da clareza ou força vocal.';

      default:
        return '';
    }
  };

  return (
    <View style={styles.containerResult}>
      <Text style={styles.title}>{idade.toUpperCase()}</Text>

      <Text style={styles.result}>Principais Dores Abordadas:</Text>

      <Text style={styles.resultado}>{explicacao(idade)}</Text>

      <TouchableOpacity
        style={styles.buttonBack}
        onPress={() => navigation.goBack()}
        activeOpacity={0.8}>
        <Text style={styles.buttonText}> Voltar </Text>
      </TouchableOpacity>
    </View>
  );
}

function SobreProjetoScreen() {
  return (
    <View style={styles.containerResult}>
      <Text style={styles.title}>Sobre o Case</Text>

      <Text style={styles.resultado}>Fono Care Plus</Text>

      <Text style={{ marginTop: 10, textAlign: 'center' }}>
        O Espaço Fonoaudiologia Care Plus oferece exercícios e orientações
        personalizadas para o desenvolvimento e o cuidado da fala, voz e
        deglutição em todas as idades. Com práticas simples, guiadas e adaptadas
        a cada fase da vida — infantil, adolescente, adulta e idosa — o projeto
        promove comunicação clara, saudável e confiante, de forma acessível e
        digital.
      </Text>
    </View>
  );
}

// Pilha
function FonoStackNavigator() {
  return (
    <FonoStack.Navigator initialRouteName="SelecaoIdade">
      <FonoStack.Screen
        name="SelecaoIdade"
        component={SelecaoIdadeScreen}
        options={{ headerShown: false }}
      />

      <FonoStack.Screen
        name="Dores"
        component={DoresScreen}
        options={{ title: 'Descrição das dores' }}
      />
    </FonoStack.Navigator>
  );
}

//Aba

function MainTabNavigator() {
  return (
    <Tab.Navigator
      initialRouteName="FonoPrincipal"
      screenOptions={{
        headerShown: false,

        tabBarActiveTintColor: styles.buttonBack.backgroundColor,
      }}>
      <Tab.Screen
        name="FonoPrincipal"
        component={FonoStackNavigator}
        options={{ title: 'Fono Care' }}
        
      />

      <Tab.Screen
        name="PerfilUsuario"
        component={PerfilUsuarioScreen}
        options={{ title: 'Perfil' }}
        
      />
    </Tab.Navigator>
  );
}

//menu lateral

function RootDrawerNavigator() {
  return (
    <Drawer.Navigator initialRouteName="FonoApp">
      <Drawer.Screen
        name="FonoApp"
        component={MainTabNavigator}
        options={{ title: 'Fono Care' }}
      />

      <Drawer.Screen
        name="SobreProjeto"
        component={SobreProjetoScreen}
        options={{ title: 'Sobre o Projeto' }}
      />
    </Drawer.Navigator>
  );
}

export default function App() {
  return (
    <NavigationContainer>
      <RootDrawerNavigator />
    </NavigationContainer>
  );
}
