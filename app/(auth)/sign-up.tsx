import CustomButton from "@/components/CustomButton";
import FormField from "@/components/FormField";
import { images } from "@/constants";
import { createUser } from "@/lib/appwrite";
import { User } from "@/types/user.type";
import { Link, router } from "expo-router";
import React, { useState } from "react";
import { Alert, Image, Text } from "react-native";
import { ScrollView, View } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";
import { Formik } from "formik";
import { SignUpSchema } from "@/schemas/user.schema";

const SignUp = () => {
  const initialFormValues: User = {
    username: "",
    email: "",
    password: "",
  };
  const submit = async (values: User) => {
    try {
      await createUser(values);
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
          validationSchema={SignUpSchema}
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
                Sign up to Aora
              </Text>
              <FormField
                title="Username"
                value={values.username}
                handleChangeText={handleChange("username")}
                otherStyles="mt-7"
              />
              {errors.username && touched.username && (
                <div>{errors.username}</div>
              )}
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
                title="Sign Up"
                handlePress={handleSubmit}
                containerStyles="mt-7"
                isLoading={isSubmitting}
              />

              <View className="flex-row justify-center gap-2 pt-5">
                <Text className="text-lg font-pregular text-gray-100">
                  Already have account?
                </Text>
                <Link
                  href="/sign-in"
                  className="font-psemibold text-secondary-100 text-lg"
                >
                  Sign In
                </Link>
              </View>
            </View>
          )}
        </Formik>
      </ScrollView>
    </SafeAreaView>
  );
};

export default SignUp;
