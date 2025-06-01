import React, { type ComponentType } from "react";
import hoistNonReactStatics from "hoist-non-react-statics";

export const connectController = <THookProps, TComponentProps extends object>(
  useComponentViewProps: (props: Readonly<THookProps>) => TComponentProps,
  Component: ComponentType<TComponentProps>
) => {
  const EnhancedComponent: React.FC<THookProps> = (props) => {
    const componentProps = useComponentViewProps(props);
    return <Component {...componentProps} />;
  };

  hoistNonReactStatics(EnhancedComponent, Component);

  return EnhancedComponent;
};
