/** @jsxRuntime classic */
/** @jsx jsx */
import { jsx, Flex, Input, Button, Label, Link, NavLink } from 'theme-ui';

const SubscriptionForm = ({ buttonLabel, ...props }) => {
  return (
    <Flex as="form" sx={styles.form} {...props}>
      <Button>
        <NavLink href="#basvuru" sx={{ textDecoration: 'none' }} color="inherit">{buttonLabel ?? 'BAŞVUR'}</NavLink>
      </Button>
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
