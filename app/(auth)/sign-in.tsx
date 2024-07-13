import CustomButton from "@/components/CustomButton";
import FormField from "@/components/FormField";
import { images } from "@/constants";
import { signIn } from "@/lib/appwrite";
import { SignInSchema } from "@/schemas/user.schema";
import { User } from "@/types/user.type";
import { Link, router } from "expo-router";
import { Formik } from "formik";
import React from "react";
import { Alert, Image, ScrollView, Text, View } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";

type SignInFormValues = Omit<User, "username">;

const SignIn = () => {
  const initialFormValues: SignInFormValues = {
    email: "",
    password: "",
  };
  const submit = async (values: SignInFormValues) => {
    try {
      await signIn(values);
      router.replace("/home");
    } catch (error: any) {
      Alert.alert("Error", error.message as string);
    }
  };

  return (
    <SafeAreaView className="bg-primary h-full">
      <ScrollView>
        <Formik
          initialValues={initialFormValues}
          onSubmit={submit}
          validationSchema={SignInSchema}
        >
          {({
            handleChange,
            values,
            isSubmitting,
            handleSubmit,
            errors,
            touched,
          }) => (
            <View className="w-full justify-center min-h-[85vh] px-4 my-6">
              <Image
                source={images.logo}
                resizeMode="contain"
                className="w-[115px] h-[35px]"
              />
              <Text className="text-2xl text-white font-psemibold mt-10">
                Sign In to Aora
              </Text>
              <FormField
                title="Email"
                value={values.email}
                handleChangeText={handleChange("email")}
                otherStyles="mt-7"
                keyboardType="email-address"
              />
              {errors.email && touched.email && <div>{errors.email}</div>}
              <FormField
                title="Password"
                value={values.password}
                handleChangeText={handleChange("password")}
                otherStyles="mt-7"
              />
              {errors.password && touched.password && (
                <div>{errors.password}</div>
              )}
              <CustomButton
                title="Sign In"
                handlePress={handleSubmit}
                containerStyles="mt-7"
                isLoading={isSubmitting}
              />

              <View className="flex-row justify-center gap-2 pt-5">
                <Text className="text-lg font-pregular text-gray-100">
                  Don't have account?
                </Text>
                <Link
                  href="/sign-up"
                  className="font-psemibold text-secondary-100 text-lg"
                >
                  Sign Up
                </Link>
              </View>
            </View>
          )}
        </Formik>
      </ScrollView>
    </SafeAreaView>
  );
};

export default SignIn;
