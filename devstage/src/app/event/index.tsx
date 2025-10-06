import { Input } from '@/components/input'
import { Text, View } from 'lucide-react-native'
import { Image, ImageBackground } from 'react-native '

export default function Event() {
	return (
		<View style={styles.container}>
			<ImageBackground
				source={require('@/assets/background.png')}
				style={styles.imgBackground}
			>
				<View style={styles.header}>
					<Image source={require('@/assets/logo.png')} style={styles.logo} />
					<View style={styles.headerContent}>
						<Text style={styles.title1}>Inscrição confirmada</Text>
						<Text style={styles.text}>
							Para entrar no evento, acesse o link enviado para seu e-mail.
						</Text>
						<Text style={styles.title2}>Indique e Ganhe</Text>
						<Text style={styles.text}>
							Convide mais pessoas para o evento e concorra a prêmios
							exclusivos! É só compartilhar o link abaixo e acompanhar as
							inscrições:
						</Text>
						<Input>
							iconName={LinkIcon}
							placeholder="devstage.com/codecraft-summit-2025/1289"
							<ButtonIcon />
						</Input>
					</View>
				</View>
			</ImageBackground>
		</View>
	)
}
