import React from 'react';
import { View, Text } from 'react-native';
import { MaterialCommunityIcons, Octicons } from '@expo/vector-icons';
import mainStyles from '../stylesheet/mainStyle';
import dashboardStyles from '../stylesheet/dashboardStyle';

const ProgressBar = ({ progress, goal, icon, taskName }) => {
  const progressPercentage = (progress / goal) * 100;

  let progressBarColor = '#EA8740';
  let fullBarColor = '#EA874020';
  if (progressPercentage >= 25 && progressPercentage <= 50) {
    progressBarColor = '#EACE40';
    fullBarColor = '#EACE4020';
  } else if (progressPercentage > 50) {
    progressBarColor = '#92ED61';
    fullBarColor = '#92ED6120';
  }

  return (
    <View style={mainStyles.dailyContainer}>
      <View style={dashboardStyles.taskHeader}>
        <Text style={mainStyles.heading2}>{taskName}</Text>
        <Text style={[mainStyles.caption, dashboardStyles.taskProgress]}>
          {progress} / {goal} {taskName === 'Exercise' ? 'mins' : 'mg'}
        </Text>
        <Text style={[mainStyles.link, dashboardStyles.viewLogs]}>View Logs</Text>
      </View>
      <View style={mainStyles.iconAndBarContainer}>
        <View style={[mainStyles.iconContainer, dashboardStyles.taskIcon]}>
          <MaterialCommunityIcons name={icon} size={24} color="white" />
        </View>
        <View style={[mainStyles.fullBar, { backgroundColor: fullBarColor }]}>
          <View
            style={[
              mainStyles.progessBar,
              {
                width: `${progressPercentage}%`,
                backgroundColor: progressBarColor,
              },
            ]}
          />
          {progress === goal && (
            <Octicons name="check" size={18} color="black" style={mainStyles.checkIcon} />
          )}
        </View>
      </View>
    </View>
  );
};

export default ProgressBar;