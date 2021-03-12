import React, {forwardRef} from 'react';
import {DatePicker, DatePickerHandle, DatePickerProps} from './DatePicker';

export type TimePickerProps = DatePickerProps;
export type TimePickerHandle = DatePickerHandle;

export const TimePicker = forwardRef<TimePickerHandle, TimePickerProps>(({mode = 'time', ...otherProps}, ref) => (
  <DatePicker ref={ref} mode={mode} {...otherProps} />
));
