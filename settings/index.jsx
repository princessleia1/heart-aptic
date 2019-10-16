function mySettings(props) {
  return (
    
<Page>
	<Section
        title={
		<Text bold align="center">Heart-Aptic</Text>}>
		<Link source="mailto:princessleia1@mail.com">
			<TextImageRow
            label="Email"
            sublabel="princessleia1@mail.com"
            icon="https://github.com/princessleia1/heart-aptic/blob/master/resources/email-icon.png?raw=true"
          />
		</Link>
		<Link source="https://github.com/princessleia1">
			<TextImageRow
             label="Github"
             sublabel="https://github.com/princessleia1"
             icon="https://github.com/princessleia1/heart-aptic/blob/master/resources/git-icon.png?raw=true"
           />
		</Link>
		<Link source="https://www.paypal.me/KirsteneG">
			<TextImageRow
            label="PayPal"
            sublabel="paypal.me/KirsteneG"
            icon="https://github.com/princessleia1/heart-aptic/blob/master/resources/pay-icon.png?raw=true"
           />
		</Link>
	</Section>
	<Section
        title={
		<Text bold align="center">Build Version</Text>}>
		<Text>
          0.0.1 - Initial Pre-release.
        </Text>
	</Section>
</Page>
  );
}

registerSettingsPage(mySettings);