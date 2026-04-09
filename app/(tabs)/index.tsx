import React, { useState } from 'react';
import { 
  Text, 
  View, 
  StyleSheet, 
  TextInput, 
  TouchableOpacity, 
  SafeAreaView,
  StatusBar,
  Dimensions,
  Modal
} from 'react-native';

const { width } = Dimensions.get('window');

export default function App() {
  const [count, setCount] = useState(0);
  const [name, setName] = useState('');
  
  // Target kemenangan diatur ke 50
  const TARGET_WIN = 50;
  const MAX_BAR = 100;

  const resetAll = () => {
    setCount(0);
    setName('');
  };

  return (
    <SafeAreaView style={styles.container}>
      <StatusBar barStyle="dark-content" />

      {/* MODAL KEMENANGAN (Muncul tepat di angka 50) */}
      <Modal visible={count >= TARGET_WIN} animationType="slide" transparent={true}>
        <View style={styles.overlay}>
          <View style={styles.victoryCard}>
            <Text style={styles.victoryEmoji}>☀️🌻🎈</Text>
            <Text style={styles.victoryTitle}>KAMU KEREN BANGET!</Text>
            
            <View style={styles.messageBox}>
              <Text style={styles.victoryMessage}>
                Yeay! <Text style={{color: '#FF9F1C', fontWeight: 'bold'}}>{name || "Teman Cerah"}</Text>, 
                kamu sudah sampai di angka <Text style={styles.boldText}>{count}</Text>!
              </Text>
              <Text style={styles.victorySubMessage}>
                "Energi positifmu hari ini benar-benar terpancar. Terima kasih sudah berbagi senyum melalui setiap ketukan!" 
              </Text>
            </View>

            <TouchableOpacity 
              style={styles.restartBtn} 
              onPress={() => setCount(0)}
            >
              <Text style={styles.restartText}>Main Lagi Yuk! ✨</Text>
            </TouchableOpacity>
          </View>
        </View>
      </Modal>

      {/* TAMPILAN DASHBOARD CERAH */}
      <View style={styles.mainCard}>
        <Text style={styles.brandTitle}>H a p p y  C o u n t e r</Text>
        
        {/* Progress Bar Visual */}
        <View style={styles.progressContainer}>
          <View style={styles.barBackground}>
            <View style={[styles.barFill, { width: `${(count / MAX_BAR) * 100}%` }]} />
          </View>
          <Text style={styles.progressLabel}>{count} / {MAX_BAR}</Text>
        </View>

        <View style={styles.inputSection}>
          <Text style={styles.inputLabel}>Sapa dunia dengan namamu:</Text>
          <TextInput
            style={styles.input}
            placeholder="Tulis di sini..."
            placeholderTextColor="#FFBF69"
            value={name}
            onChangeText={setName}
          />
        </View>

        {/* Counter Circle */}
        <View style={[styles.counterBox, { borderColor: count >= TARGET_WIN ? '#2EC4B6' : '#FFBF69' }]}>
          <Text style={styles.countNumber}>{count}</Text>
          <Text style={styles.pointText}>HAPPINESS POINTS</Text>
        </View>

        <View style={styles.buttonRow}>
          <TouchableOpacity 
            style={[styles.actionBtn, styles.btnMinus]} 
            onPress={() => count > 0 && setCount(count - 1)}
          >
            <Text style={styles.actionBtnText}>−</Text>
          </TouchableOpacity>

          <TouchableOpacity 
            style={[styles.actionBtn, styles.btnPlus]} 
            onPress={() => count < MAX_BAR && setCount(count + 1)}
          >
            <Text style={[styles.actionBtnText, { color: '#FFF' }]}>TAMBAH</Text>
          </TouchableOpacity>
        </View>

        <TouchableOpacity onPress={resetAll} style={styles.resetBtn}>
          <Text style={styles.resetBtnText}>Mulai Dari Nol</Text>
        </TouchableOpacity>
      </View>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#CBF3F0', // Mint cerah
    justifyContent: 'center',
    alignItems: 'center',
  },
  mainCard: {
    width: width * 0.9,
    backgroundColor: '#FFFFFF',
    borderRadius: 40,
    padding: 25,
    alignItems: 'center',
    elevation: 10,
    shadowColor: '#2EC4B6',
    shadowOpacity: 0.3,
    shadowRadius: 20,
  },
  brandTitle: {
    fontSize: 22,
    fontWeight: '900',
    color: '#FF9F1C',
    letterSpacing: 2,
    marginBottom: 20,
  },
  progressContainer: {
    width: '100%',
    alignItems: 'center',
    marginBottom: 25,
  },
  barBackground: {
    width: '100%',
    height: 14,
    backgroundColor: '#F1F1F1',
    borderRadius: 20,
    overflow: 'hidden',
  },
  barFill: {
    height: '100%',
    backgroundColor: '#2EC4B6', // Tiffany Blue cerah
  },
  progressLabel: {
    fontSize: 12,
    fontWeight: 'bold',
    color: '#2EC4B6',
    marginTop: 5,
  },
  inputSection: {
    width: '100%',
    marginBottom: 20,
  },
  inputLabel: {
    fontSize: 12,
    color: '#FFBF69',
    textAlign: 'center',
    marginBottom: 5,
    fontWeight: '600',
  },
  input: {
    backgroundColor: '#FF9F1C10',
    borderRadius: 15,
    padding: 12,
    textAlign: 'center',
    fontSize: 16,
    color: '#FF9F1C',
    fontWeight: 'bold',
  },
  counterBox: {
    width: 200,
    height: 200,
    borderRadius: 100,
    borderWidth: 8,
    borderStyle: 'dashed',
    justifyContent: 'center',
    alignItems: 'center',
    marginBottom: 30,
  },
  countNumber: {
    fontSize: 80,
    fontWeight: '900',
    color: '#2EC4B6',
  },
  pointText: {
    fontSize: 10,
    fontWeight: 'bold',
    color: '#FFBF69',
    letterSpacing: 1,
  },
  buttonRow: {
    flexDirection: 'row',
    gap: 15,
  },
  actionBtn: {
    height: 60,
    justifyContent: 'center',
    alignItems: 'center',
    borderRadius: 20,
    elevation: 3,
  },
  btnMinus: {
    width: 60,
    backgroundColor: '#FDFFB6',
  },
  btnPlus: {
    flex: 1,
    backgroundColor: '#FF9F1C',
    paddingHorizontal: 40,
  },
  actionBtnText: {
    fontSize: 18,
    fontWeight: 'bold',
    color: '#FF9F1C',
  },
  resetBtn: {
    marginTop: 30,
  },
  resetBtnText: {
    color: '#BDC3C7',
    fontSize: 12,
    fontWeight: 'bold',
    textDecorationLine: 'underline',
  },

  // STYLES MODAL
  overlay: {
    flex: 1,
    backgroundColor: '#2EC4B6CC', // Background transparan warna mint
    justifyContent: 'center',
    alignItems: 'center',
  },
  victoryCard: {
    width: width * 0.85,
    backgroundColor: '#FFF',
    borderRadius: 30,
    padding: 30,
    alignItems: 'center',
  },
  victoryEmoji: {
    fontSize: 50,
    marginBottom: 10,
  },
  victoryTitle: {
    fontSize: 24,
    fontWeight: '900',
    color: '#FF9F1C',
    textAlign: 'center',
  },
  messageBox: {
    marginVertical: 20,
  },
  victoryMessage: {
    fontSize: 18,
    color: '#333',
    textAlign: 'center',
    lineHeight: 26,
  },
  victorySubMessage: {
    fontSize: 15,
    color: '#2EC4B6',
    textAlign: 'center',
    fontStyle: 'italic',
    marginTop: 10,
  },
  boldText: {
    fontWeight: 'bold',
    fontSize: 22,
  },
  restartBtn: {
    backgroundColor: '#FF9F1C',
    paddingVertical: 15,
    paddingHorizontal: 40,
    borderRadius: 20,
  },
  restartText: {
    color: '#FFF',
    fontWeight: 'bold',
    fontSize: 16,
  }
});