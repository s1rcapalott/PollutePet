import React from 'react';
import { View, StyleSheet, Text } from 'react-native';
import Icon from 'react-native-vector-icons/FontAwesome';

interface ProgressBarProps {
  label: string;
  value: number;
  max?: number;
  color?: string;
  icon?: string;
}

const ProgressBar: React.FC<ProgressBarProps> = ({
  label,
  value,
  max = 100,
  color = '#4CAF50',
  icon = 'circle',
}) => {
  const percent = Math.min((value / max) * 100, 100);

  return (
    <View style={styles.container}>
      <View style={styles.labelContainer}>
        <Icon name={icon} size={16} color="#fff" style={styles.icon} />
        <Text style={styles.label}>{label}</Text>
      </View>
      <View style={styles.barBackground}>
        <View style={[styles.barFill, { width: `${percent}%`, backgroundColor: color }]} />
      </View>
      <Text style={styles.valueText}>
        {value.toFixed(1)} / {max}
      </Text>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    marginBottom: 15,
    width: '100%',
  },
  labelContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    marginBottom: 5,
  },
  icon: {
    marginRight: 6,
  },
  label: {
    color: '#fff',
    fontWeight: '600',
  },
  barBackground: {
    height: 20,
    width: '100%',
    backgroundColor: '#444',
    borderRadius: 10,
    overflow: 'hidden',
  },
  barFill: {
    height: '100%',
    borderRadius: 10,
  },
  valueText: {
    color: '#ccc',
    fontSize: 12,
    marginTop: 2,
  },
});

export default ProgressBar;
