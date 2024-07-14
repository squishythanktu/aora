import { icons } from "@/constants";
import { Image, TextInput, TouchableOpacity, View } from "react-native";

interface SearchInputProps {
  handleChangeText: (e: string) => void;
  placeholder?: string;
}

const SearchInput = ({ handleChangeText, placeholder }: SearchInputProps) => {
  return (
    <View className="border-2 border-black-200 w-full h-16 px-4 bg-black-100 rounded-2xl flex-row focus:border-secondary items-center space-x-4">
      <TextInput
        className="text-base mt-0.5 text-white font-pregular flex-1"
        placeholder={placeholder}
        placeholderTextColor="#7b7b8b"
        onChangeText={handleChangeText}
      />
      <TouchableOpacity>
        <Image source={icons.search} className="w-5 h-5" resizeMode="contain" />
      </TouchableOpacity>
    </View>
  );
};

export default SearchInput;
