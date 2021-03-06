import speak from './actions/speak';
import voices from './actions/voices';
import setVoice from './actions/setVoice';
import answer from './actions/answer';
import learn from './actions/learn';
import listAnswers from './actions/listAnswers';
import forget from './actions/forget';

export default {
  s: speak,
  v: setVoice,
  voices,
  answer,
  l: learn,
  ll: listAnswers,
  f: forget,
};
