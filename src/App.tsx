/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import { BrowserRouter, Routes, Route, Navigate } from 'react-router-dom';
import { StudyLayout } from './features/study/components/StudyLayout';

export default function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Navigate to="/topic/conceitos-basicos" replace />} />
        <Route path="/topic/:topicId" element={<StudyLayout />} />
      </Routes>
    </BrowserRouter>
  );
}
