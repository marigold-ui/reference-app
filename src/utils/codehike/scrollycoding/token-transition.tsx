import { type AnnotationHandler, InnerToken } from 'codehike/code';
import { SmoothPre } from '@/utils/codehike/scrollycoding/smooth-pre';

export const tokenTransitions: AnnotationHandler = {
  name: 'token-transitions',
  PreWithRef: SmoothPre,
  Token: props => (
    <InnerToken merge={props} style={{ display: 'inline-block' }} />
  ),
};
