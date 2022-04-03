/** @jsxRuntime classic */
/** @jsx jsx */
import { jsx, Flex, Input, Button, Label, Link, NavLink } from 'theme-ui';

const SubscriptionForm = ({ buttonLabel, ...props }) => {
  return (
    <Flex as="form" sx={styles.form} {...props}>
      <button
        sx={{
          appearance: 'none',
          display: 'inline-block',
          textAlign: 'center',
          lineHeight: 'inherit',
          textDecoration: 'none',
          fontSize: 'inherit',
          fontWeight: 'bold',
          m: 0,
          px: 3,
          py: 2,
          border: 0,
          borderRadius: 4,
          variant: 'buttons.primary',
        }}>
        <NavLink href="#basvuru" sx={{ textDecoration: 'none' }} color="white">{buttonLabel ?? 'BAŞVUR'}</NavLink>
      </button>
    </Flex>
  );
};

export default SubscriptionForm;

const styles = {
  form: {
    button: {
      ml: [3],
      width: '50%'
    },
  },
};
