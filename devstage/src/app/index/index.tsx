import { Button } from '@/components/button'
import { Input } from '@/components/input'
import { colors } from '@/styles/colors'
import { Mail, RadioIcon, User } from 'lucide-react-native'
import { Image, ImageBackground, Text, View } from 'react-native'
import { styles } from './styles'

export default function Index() {
	return (
		<View style={styles.container}>
			<ImageBackground
				source={require('@/assests/background.png')}
				style={styles.imgBackground}
			>
				<View style={styles.header}>
					<Image source={require('@/assests/logo.png')} style={styles.logo} />

					<View style={styles.headerContent}>
						<Text style={styles.title}>CodeCraft</Text>
						<Text style={styles.subtitle}>Summit 2025</Text>
					</View>
				</View>

				<View style={styles.card}>
					<View style={styles.aboutHeader}>
						<Text style={styles.aboutTitle}>Sobre o evento</Text>

						<View style={styles.aboutStatus}>
							<RadioIcon size={20} color={colors.purple[300]} />
							<Text style={styles.aboutSubTitle}>ao vivo</Text>
						</View>
					</View>
					<Text style={styles.description}>
						Um evento feito por e para pessoas desenvolvedoras apaixonadas por
						criar soluções inovadoras e compartilhar conhecimento. Vamos
						mergulhar nas tendências mais recentes em desenvolvimento de
						software, arquitetura de sistemas e tecnologias emergentes, com
						palestras, workshops e hackathons.
					</Text>
					<Text style={styles.description}>
						Dias 15 a 17 de março | Das 18h às 21h
					</Text>
				</View>

				<View style={[styles.card, { marginTop: 16 }]}>
					<Text style={styles.aboutTitle}>Inscrição</Text>

					<Input iconName={User} placeholder="Nome completo" />
					<Input iconName={Mail} placeholder="E-mail" />
					<Button title="Confirmar" />
				</View>
			</ImageBackground>
		</View>
	)
}
