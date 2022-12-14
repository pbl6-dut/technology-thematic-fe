import { useQuery } from "react-query";
import { CourseType } from "src/data-model/CourseTypes";
import { courseService } from "src/services/CourseServices";
import { QUERY_KEYS } from "src/utils/constants";
import { UseQueryResponse } from "src/utils/types/UseQueryHookResponse";

const useGetCourseById = (courseId?: string): UseQueryResponse<CourseType> => {
  const { data, isLoading, isError, isSuccess } = useQuery(
    [QUERY_KEYS.GET_COURSE_DETAIL, courseId],
    () => courseService.getCourseById(courseId ?? ""),
    {
      enabled: !!courseId,
    }
  );

  return {
    data: data?.data,
    isLoading,
    isError,
    isSuccess,
  };
};

export default useGetCourseById;
