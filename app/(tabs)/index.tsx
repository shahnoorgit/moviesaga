import SearchBar from "@/components/SearchBar";
import { icons } from "@/constants/icons";
import { images } from "@/constants/images";
import { Image, ScrollView, StatusBar, Text, View } from "react-native";
import { useRouter} from "expo-router"
export default function Index() {
  const router=useRouter()
  return (
    <View
      className="flex-1 bg-primary"
    >
      <Image className=" absolute w-full z-0" source={images.bg}/>
      <ScrollView showsVerticalScrollIndicator={false} contentContainerStyle={{padding:10,minHeight:'100%'}}>
        <Image source={icons.logo} className=" w-12 h-10 mt-20 mb-5 mx-auto"/>
        <View className="flex-1 mt-5"><SearchBar placeholder="Search for movie!" onPress={()=>router.push('/Search')}/></View>
      </ScrollView>
      
    </View>
  );
}
