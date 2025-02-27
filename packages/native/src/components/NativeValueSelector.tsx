import * as React from 'react';
import { useMemo } from 'react';
import { StyleSheet, TextInput } from 'react-native';
import type { FullOption } from 'react-querybuilder';
import { TestID, joinWith, useValueSelector } from 'react-querybuilder';
import { defaultNativeSelectStyles, defaultNativeStyles } from '../styles';
import type { ValueSelectorNativeProps } from '../types';

/**
 * @group Components
 */
export const NativeValueSelector = <Opt extends FullOption = FullOption>({
  handleOnChange,
  options: _options,
  value,
  disabled,
  multiple,
  listsAsArrays,
  schema,
  testID,
}: ValueSelectorNativeProps<Opt>): React.JSX.Element => {
  const styles = useMemo(() => {
    switch (testID) {
      case TestID.combinators: {
        return {
          selector: StyleSheet.flatten([
            defaultNativeStyles.combinatorSelector,
            schema.styles?.combinatorSelector,
          ]),
          option: StyleSheet.flatten([
            defaultNativeStyles.combinatorOption,
            schema.styles?.combinatorOption,
          ]),
        };
      }
      case TestID.fields: {
        return {
          selector: StyleSheet.flatten([
            defaultNativeStyles.fieldSelector,
            schema.styles?.fieldSelector,
          ]),
          option: StyleSheet.flatten([defaultNativeStyles.fieldOption, schema.styles?.fieldOption]),
        };
      }
      case TestID.operators: {
        return {
          selector: StyleSheet.flatten([
            defaultNativeStyles.operatorSelector,
            schema.styles?.operatorSelector,
          ]),
          option: StyleSheet.flatten([
            defaultNativeStyles.operatorOption,
            schema.styles?.operatorOption,
          ]),
        };
      }
      case TestID.valueSourceSelector: {
        return {
          selector: StyleSheet.flatten([
            defaultNativeStyles.valueSourceSelector,
            schema.styles?.valueSourceSelector,
          ]),
          option: StyleSheet.flatten([
            defaultNativeStyles.valueSourceOption,
            schema.styles?.valueSourceOption,
          ]),
        };
      }
      case TestID.valueEditor: {
        return {
          selector: StyleSheet.flatten([
            defaultNativeStyles.valueEditorSelector,
            schema.styles?.valueEditorSelector,
          ]),
          option: StyleSheet.flatten([
            defaultNativeStyles.valueEditorOption,
            schema.styles?.valueEditorOption,
          ]),
        };
      }
      default:
    }
    return StyleSheet.create(defaultNativeSelectStyles);
  }, [
    schema.styles?.combinatorOption,
    schema.styles?.combinatorSelector,
    schema.styles?.fieldOption,
    schema.styles?.fieldSelector,
    schema.styles?.operatorOption,
    schema.styles?.operatorSelector,
    schema.styles?.valueEditorOption,
    schema.styles?.valueEditorSelector,
    schema.styles?.valueSourceOption,
    schema.styles?.valueSourceSelector,
    testID,
  ]);

  const { onChange } = useValueSelector({ handleOnChange, listsAsArrays, multiple, value });

  // istanbul ignore next
  const val = multiple ? (Array.isArray(value) ? joinWith(value, ',') : value) : value;

  return (
    <TextInput
      testID={testID}
      aria-disabled={disabled}
      style={styles.selector}
      value={val}
      onChangeText={onChange}
    />
  );
};
