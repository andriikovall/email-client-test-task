import type { ComponentType } from "react";
import hoistNonReactStatics from "hoist-non-react-statics";

export const connectController = <THookProps, TComponentProps extends object>(
  useComponentViewProps: (props: THookProps) => TComponentProps,
  Component: ComponentType<TComponentProps>
) => {
  const EnhancedComponent = (props: THookProps) => {
    const componentProps = useComponentViewProps(props);
    return <Component {...componentProps} />;
  };

  hoistNonReactStatics(EnhancedComponent, Component);

  return EnhancedComponent;
};
